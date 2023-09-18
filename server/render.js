/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as React from "react";
import {renderToString} from 'react-dom/server';
import { renderToPipeableStream } from "react-dom/server";
import App from "../src/App";
import { DataProvider } from "../src/client_data";
import { ABORT_DELAY } from "./delays";
import { createServerData_sidebar, createServerData_home_sav, createServerData_home, createServerData_wallet } from './server_data';

// In a real setup, you'd read it from webpack build stats.
let assets = {
  "main.js": "/main.js",
  "main.css": "/main.css"
};

module.exports = function render(url, res) {
  
  // This is how you would wire it up previously:
  // const sb = createServerData_sidebar();
  // const home = createServerData_home();
  // const sav = createServerData_home_sav();
  // const wallet = createServerData_wallet(res);
  // const data = Promise.all(sb, home, sav, wallet, data);
  // res.send(
  //   '<!DOCTYPE html>' +
  //   renderToString(
  //     <DataProvider data={data}>
  //       <App assets={assets} />
  //     </DataProvider>,
  //   )
  // );

  // The new wiring is a bit more involved.
  res.socket.on("error", (error) => {
    console.error("Fatal", error);
  });
  let didError = false;
  const sb = createServerData_sidebar();
  const home = createServerData_home();
  const sav = createServerData_home_sav();
  const wallet = createServerData_wallet(res);
  const stream = renderToPipeableStream(
    <DataProvider data={{ sb, home, sav, wallet }}>
      <App assets={assets} />
    </DataProvider>,
    {
      bootstrapScripts: [assets["main.js"]],
      onShellReady() {
        // If something errored before we started streaming, we set the error code appropriately.
        res.statusCode = didError ? 500 : 200;
        res.setHeader("Content-type", "text/html");
        stream.pipe(res);
      },
      onError(x) {
        didError = true;
        console.error(x);
      }
    }
  );
  // Abandon and switch to client rendering if enough time passes.
  // Try lowering this to see the client recover.
  setTimeout(() => stream.abort(), ABORT_DELAY);
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {createContext, useContext} from 'react';

// Note: this file does not demonstrate a real data fetching strategy.
// We only use this to simulate data fetching happening on the server
// while the cache is populated on the client. In a real app, you would
// instead use a data fetching library or Server Components for this.

const DataContext = createContext(null);

export function DataProvider({children, data}) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

// In a real implementation the data would be streamed with the HTML.
// We haven't integrated this part yet, so we'll just use fake data.
const fakeData = [
  "Your account needs to be updated due to some issue.",
  'Please review your annual 1099k.',
];

export function useData_sidebar() {
  const ctx = useContext(DataContext);
  if (ctx !== null) {
    // This context is only provided on the server.
    // It is here to simulate a suspending data fetch.
    ctx.sb.read();
  }
  return fakeData;
}

export function useData_home() {
  const ctx = useContext(DataContext);
  if (ctx !== null) {
    // This context is only provided on the server.
    // It is here to simulate a suspending data fetch.
    ctx.home.read();
  }
  return fakeData;
}

export function useData_sav() {
  const ctx = useContext(DataContext);
  if (ctx !== null) {
    // This context is only provided on the server.
    // It is here to simulate a suspending data fetch.
    ctx.sav.read();
  }
  return fakeData;
}

export function useData_wallet() {
  const ctx = useContext(DataContext);
  if (ctx !== null) {
    const wallet_data = ctx.wallet.read();
    // server code
    return wallet_data
  }
  // browser code
  if (globalThis.window && window.__wallet__) {
    return window.__wallet__;
  }
}

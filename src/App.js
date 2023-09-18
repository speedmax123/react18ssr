/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Html from './Html';
import Spinner from './Spinner';
import Layout from './Layout';
import NavBar from './NavBar';
import Wallet from './wallet';

const Comments = lazy(() => import('./Comments' /* webpackPrefetch: true */));
const Sidebar = lazy(() => import('./Sidebar' /* webpackPrefetch: true */));
const Sav = lazy(() => import('./Sav' /* webpackPrefetch: true */));

export default function App({ assets }) {
  return (
    <Html assets={assets} title="Hello">
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary FallbackComponent={Error}>
          <Content />
        </ErrorBoundary>
      </Suspense>
    </Html>
  );
}

function Content() {
  return (
    <Layout>
      <h1>My eBay Payments</h1>
      <NavBar />
      <aside className="sidebar">
        <Suspense fallback={<Spinner />}>
          <Sidebar />
        </Suspense>
      </aside>
      <article className="post">
        <br />
        <section className="comments">
          <h3>Notification</h3>
          <Suspense fallback={<Spinner />}>
            <Comments />
          </Suspense>
        </section>
        <br />
        <h3>Transaction Summary</h3>
        <Suspense fallback={<Spinner />}>
          <Sav />
        </Suspense>
        <br />
        <section className="comments">
          <h3>Wallet</h3>
          <Suspense fallback={<Spinner />}>
            <Wallet />
          </Suspense>
        </section>
      </article>
    </Layout>
  );
}

function Error({ error }) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{error.stack}</pre>
    </div>
  );
}

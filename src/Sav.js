/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useData_sav } from './client_data';

export default function Post() {
  const sav = useData_sav()
  return (
    <>
      <div className="row" onClick={() => alert('clickable')}>
        <div className="col-sm-6 mb-3 mb-sm-0 wallet-container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Your account balance</h5>
              <h4 className="card-title">$37,053.87</h4>
              <br />
              <a href="#" className="btn btn-link">$2,025.42 onHold</a>
              <a href="#" className="btn btn-link">$147.08Processing</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 wallet-container">
          <div className="card">
            <div className="card-header">
              All transactions
            </div>
            <ul className="list-group list-group-flush" style={{ width: '18rem' }}>
              <li className="list-group-item">Order</li>
              <li className="list-group-item">Refund</li>
              <li className="list-group-item">Claim</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

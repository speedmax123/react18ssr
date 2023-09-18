/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useData_sidebar } from './client_data';

export default function Sidebar() {
  const sidebar = useData_sidebar()
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item disabled">Personal Info</li>
        <li className="list-group-item">Payments</li>
        <li className="list-group-item disabled">Account Preference</li>
        <li className="list-group-item disabled">Selling</li>
        <li className="list-group-item disabled">Donation Preference</li>
      </ul>
    </>
  );
}

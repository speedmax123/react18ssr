/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav nav-underline">
      <li className="nav-item">
        <a className="nav-link" href="#">Activity</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Message</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Account</a>
      </li>
    </ul>
    </nav>
  );
}

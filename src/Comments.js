/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {useData_home} from './client_data';

export default function Comments() {
  const comments = useData_home();
  return (
    <>
      {comments.map((comment, i) => (
        <p className="comment" key={i} onClick={() => alert('clickable')}>
          {comment}
        </p>
      ))}
    </>
  );
}

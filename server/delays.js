/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Tweak these to play with different kinds of latency.

// How long the data fetches on the server.
exports.API_DELAY_FAST = 2000;

exports.API_DELAY_NORMAL = 4000;

exports.API_DELAY_SLOW = 7000;

exports.API_DEPLAY_SLOWEST = 11000;

// How long the server waits for data before giving up.
exports.ABORT_DELAY = 15000;

// How long serving the JS bundles is delayed.
exports.JS_BUNDLE_DELAY = 3000;

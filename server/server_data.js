import { API_DEPLAY_SLOWEST, API_DELAY_NORMAL, API_DELAY_SLOW, API_DELAY_FAST } from "./delays";

// Simulate a delay caused by data fetching.
// We fake this because the streaming HTML renderer
// is not yet integrated with real data fetching strategies.
export function createServerData_sidebar() {
  let done = false;
  let promise = null;
  return {
    read() {
      if (done) {
        return;
      }
      if (promise) {
        throw promise;
      }
      promise = new Promise((resolve) => {
        setTimeout(() => {
          done = true;
          promise = null;
          resolve();
        }, API_DELAY_FAST);
      });
      throw promise;
    }
  };
}

export function createServerData_home() {
  let done = false;
  let promise = null;
  return {
    read() {
      if (done) {
        return;
      }
      if (promise) {
        throw promise;
      }
      promise = new Promise((resolve) => {
        setTimeout(() => {
          done = true;
          promise = null;
          resolve();
        }, API_DELAY_SLOW);
      });
      throw promise;
    }
  };
}

export function createServerData_home_sav() {
  let done = false;
  let promise = null;
  return {
    read() {
      if (done) {
        return;
      }
      if (promise) {
        throw promise;
      }
      promise = new Promise((resolve) => {
        setTimeout(() => {
          done = true;
          promise = null;
          resolve();
        }, API_DEPLAY_SLOWEST);
      });
      throw promise;
    }
  };
}

const wallet_data = [
  {name: 'Bank account ending in 5399', expire: 'Expires 03/30'}, 
  {name: 'Amex ending in 0002', expire: 'Amex ending in 0002'},
  {name: 'Bank account ending in 5399', expire: 'Expires 03/30'},
  {name: 'Amex ending in 0002', expire: 'Amex ending in 0002'},
];
export function createServerData_wallet(res) {
  let done = false;
  let promise = null;
  let data = null;
  return {
    read() {
      if (done) {
        return data;
      }
      if (promise) {
        throw promise;
      }
      promise = new Promise((resolve) => {
        setTimeout(() => {
          done = true;
          promise = null;
          res.write(`<script>window.__wallet__ = ${JSON.stringify(wallet_data)}</script>`);
          data = wallet_data;
          resolve();
        }, API_DELAY_NORMAL);
      });
      throw promise;
    }
  };
}
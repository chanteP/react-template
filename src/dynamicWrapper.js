import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';

import reducerRegistry from './redux/reducerRegistry';

const asyncComponent = (loader) => {
  const Component = () => {
    return (
        <Suspense fallback={<Spin size="large" />}>
          {React.createElement(lazy(loader))}
        </Suspense>
    );
  };

  return Component;
};

export default (compLoader, reducerNames) => {
  const loader = () => {
    let reducerLoader;
    if (reducerNames) {
      reducerLoader = () => reducerNames.map((name) => import(`./reducer/${name}`));
    }

    const component = compLoader();
    const reducers = reducerLoader ? reducerLoader() : [];
    return Promise.all([...reducers, component]).then(ret => {
      if (!reducers || !reducers.length) {
        return ret[0];
      } else {
        const len = reducers.length;
        ret.slice(0, len).forEach((m, index) => {
          m = m.default || m;
          reducerRegistry.register(reducerNames[index], m);
        });
        return ret[len];
      }
    });
  };

  return asyncComponent(loader);
}
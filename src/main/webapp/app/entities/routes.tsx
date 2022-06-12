import React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Product from './product';
import ProductCategory from './product-category';
import Customer from './customer';
import ProductOrder from './product-order';
import OrderItem from './order-item';
import Invoice from './invoice';
import Shipment from './shipment';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default ({ match }) => {
  return (
    <div>
      <Switch>
        {/* prettier-ignore */}
        <ErrorBoundaryRoute path={`${match.url}product`} component={Product} />
        <ErrorBoundaryRoute path={`${match.url}product-category`} component={ProductCategory} />
        <ErrorBoundaryRoute path={`${match.url}customer`} component={Customer} />
        <ErrorBoundaryRoute path={`${match.url}product-order`} component={ProductOrder} />
        <ErrorBoundaryRoute path={`${match.url}order-item`} component={OrderItem} />
        <ErrorBoundaryRoute path={`${match.url}invoice`} component={Invoice} />
        <ErrorBoundaryRoute path={`${match.url}shipment`} component={Shipment} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </Switch>
    </div>
  );
};

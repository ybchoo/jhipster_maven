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
import Blog from './blog';
import Entry from './entry';
import Tag from './tag';
import Department from './department';
import JobHistory from './job-history';
import Job from './job';
import Employee from './employee';
import Location from './location';
import Task from './task';
import Country from './country';
import Region from './region';
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
        <ErrorBoundaryRoute path={`${match.url}blog`} component={Blog} />
        <ErrorBoundaryRoute path={`${match.url}entry`} component={Entry} />
        <ErrorBoundaryRoute path={`${match.url}tag`} component={Tag} />
        <ErrorBoundaryRoute path={`${match.url}department`} component={Department} />
        <ErrorBoundaryRoute path={`${match.url}job-history`} component={JobHistory} />
        <ErrorBoundaryRoute path={`${match.url}job`} component={Job} />
        <ErrorBoundaryRoute path={`${match.url}employee`} component={Employee} />
        <ErrorBoundaryRoute path={`${match.url}location`} component={Location} />
        <ErrorBoundaryRoute path={`${match.url}task`} component={Task} />
        <ErrorBoundaryRoute path={`${match.url}country`} component={Country} />
        <ErrorBoundaryRoute path={`${match.url}region`} component={Region} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </Switch>
    </div>
  );
};

import product from 'app/entities/product/product.reducer';
import productCategory from 'app/entities/product-category/product-category.reducer';
import customer from 'app/entities/customer/customer.reducer';
import productOrder from 'app/entities/product-order/product-order.reducer';
import orderItem from 'app/entities/order-item/order-item.reducer';
import invoice from 'app/entities/invoice/invoice.reducer';
import shipment from 'app/entities/shipment/shipment.reducer';
import blog from 'app/entities/blog/blog.reducer';
import entry from 'app/entities/entry/entry.reducer';
import tag from 'app/entities/tag/tag.reducer';
import department from 'app/entities/department/department.reducer';
import jobHistory from 'app/entities/job-history/job-history.reducer';
import job from 'app/entities/job/job.reducer';
import employee from 'app/entities/employee/employee.reducer';
import location from 'app/entities/location/location.reducer';
import task from 'app/entities/task/task.reducer';
import country from 'app/entities/country/country.reducer';
import region from 'app/entities/region/region.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  product,
  productCategory,
  customer,
  productOrder,
  orderItem,
  invoice,
  shipment,
  blog,
  entry,
  tag,
  department,
  jobHistory,
  job,
  employee,
  location,
  task,
  country,
  region,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;

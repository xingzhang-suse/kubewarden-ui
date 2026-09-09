import { KUBEWARDEN_PRODUCT_NAME, POLICY_REPORTER_PRODUCT, PROD_NAME } from '@kubewarden/types';

import Dashboard from '@kubewarden/pages/c/_cluster/kubewarden/index.vue';
import PolicyReport from '@kubewarden/pages/c/_cluster/kubewarden/_resource/policy-reporter.vue';
import KubewardenResourcedList from '@kubewarden/pages/c/_cluster/kubewarden/_resource/index.vue';
import ViewKubewardenNsResource from '@kubewarden/pages/c/_cluster/kubewarden/_resource/_namespace/_id.vue';

const routes = [
  {
    name:       `c-cluster-${ PROD_NAME }-${ KUBEWARDEN_PRODUCT_NAME }`,
    path:       `/c/:cluster/${ PROD_NAME }/${ KUBEWARDEN_PRODUCT_NAME }`,
    component:  Dashboard,
    meta:       {
      product: PROD_NAME,
      pkg:     KUBEWARDEN_PRODUCT_NAME
    }
  },
  {
    name:       `c-cluster-${ PROD_NAME }-${ KUBEWARDEN_PRODUCT_NAME }-${ POLICY_REPORTER_PRODUCT }`,
    path:       `/c/:cluster/${ PROD_NAME }/${ KUBEWARDEN_PRODUCT_NAME }/${ POLICY_REPORTER_PRODUCT }`,
    component:  PolicyReport,
    meta:       {
      product: PROD_NAME,
      pkg:     KUBEWARDEN_PRODUCT_NAME
    }
  },
  {
    name:       `c-cluster-${ PROD_NAME }-${ KUBEWARDEN_PRODUCT_NAME }-resource`,
    path:       `/c/:cluster/${ PROD_NAME }/${ KUBEWARDEN_PRODUCT_NAME }/:resource`,
    component:  KubewardenResourcedList,
    meta:       {
      product: PROD_NAME,
      pkg:     KUBEWARDEN_PRODUCT_NAME
    }
  },
  {
    name:       `c-cluster-${ PROD_NAME }-${ KUBEWARDEN_PRODUCT_NAME }-resource-namespace-id`,
    path:       `/c/:cluster/${ PROD_NAME }/${ KUBEWARDEN_PRODUCT_NAME }/:resource/:namespace/:id`,
    component:  ViewKubewardenNsResource,
    meta:       {
      product: PROD_NAME,
      pkg:     KUBEWARDEN_PRODUCT_NAME
    }
  }
];

export default routes;

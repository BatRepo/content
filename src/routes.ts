import { Router } from 'express'; 
import { getallproductscontroller, getproductcontroller } from './useCases/Products';
import { webhookContentcontroller } from './useCases/webhooks';
const router = Router();

router.get('/', (request, response) => {
    return response.status(200).json({ message: 'Server ON' });
});

router.get('/getAllproducts', (request, response) => {
  return getallproductscontroller.handle(response);
});

router.get('/getProduct', (request, response) => {
  return getproductcontroller.handle(request, response);
});

// router.get('/typesProducts', (request, response) => {
//   // return getproductcontroller.handle(request, response);
// });

router.post('/webhookContentfull', (request, response) => {
  return webhookContentcontroller.handle(request, response);
});


export { router }
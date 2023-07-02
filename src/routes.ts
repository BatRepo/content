import { Router } from 'express'; 
const router = Router();

router.get('/', (request, response) => {
    return response.status(200).json({ message: 'Server ON' });
});

router.post('/register', (request, response) => {
  return registerController.handle(request, response);
});


export { router }
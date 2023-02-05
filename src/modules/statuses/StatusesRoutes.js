import { Router } from 'express';
import postStatuses from './postStatuses';
import getStatuses from './getStatuses';
import patchStatuses from './patchStatuses';
import deleteStatuses from './deleteStatuses';

const statusesRouter = Router();

statusesRouter.post('/', postStatuses);
statusesRouter.get('/', getStatuses);
statusesRouter.patch('/:statusId', patchStatuses);
statusesRouter.delete('/:statusId', deleteStatuses);


export default statusesRouter;

import {Router, Request, Response, NextFunction} from 'express';
const data = require('./data.json');

export class NCLRouter_V2 {
  router: Router

  /**
   * Initialize the NCLRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all data.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    const str = data[0].data
    const fnameIdx = str.indexOf("0000");
    const lnameIdx = str.lastIndexOf("000");

    const firstName = str.substr(0, fnameIdx)
    const lastName = str.substr(fnameIdx + 4, (lnameIdx) - (fnameIdx + 4))
    const clientId = str.substr(lnameIdx + 3)
    const start = clientId.substr(0, 3)
    const end = clientId.substr(3)
    
    res.status(200)
      .send({
        statusCode :200,
        data: {
          firstName,
          lastName,
          clientId : start + '-' + end
        }
      });
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
  }

}

// Create the Router, and export its configured Express.Router
const nclRoutes = new NCLRouter_V2();
nclRoutes.init();

export default nclRoutes.router;

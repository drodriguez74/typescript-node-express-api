import {Router, Request, Response, NextFunction} from 'express';
const data = require('./data.json');

export class NCLRouter {
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

    const firstName = str.substr(0, fnameIdx+4)
    const lastName = str.substr(fnameIdx+4, (lnameIdx + 3) - (fnameIdx + 4))
    const clientId = str.substr(lnameIdx + 3);
    
    res.status(200)
      .send({
        statusCode :200,
        data: {
          firstName,
          lastName,
          clientId,
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
const nclRoutes = new NCLRouter();
nclRoutes.init();

export default nclRoutes.router;

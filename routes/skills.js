import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

/* GET users listing. */
app.get('/', skillsCtrl.index)
export {
  router
}

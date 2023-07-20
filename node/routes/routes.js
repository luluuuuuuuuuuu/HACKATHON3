/*import express from 'express'
import { getAllItems, getItem, createItem, updateItem, deleteItem } from '../controllers/itemController.js'
const router = express.Router()

router.get('/', getAllItems)
router.get('/:id', getItem)
router.post('/', createItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

export default router*/

import express from 'express'
import { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog } from '../controllers/BlogController.js'
const blogRoutes = express.Router()

blogRoutes.get('/getblogs', getAllBlogs)
blogRoutes.get('/:id', getBlog)
blogRoutes.post('/', createBlog)
blogRoutes.put('/:id', updateBlog)
blogRoutes.delete('/:id', deleteBlog)

export default blogRoutes
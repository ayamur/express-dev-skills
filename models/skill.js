import mongoose from 'mongoose'

const Schema = mongoose.Schema
	
const skillSchema = new Schema({
  text: String,
  basics: Boolean,
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}
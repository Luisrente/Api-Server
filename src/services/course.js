 import Course from '../models/Course';

/**
 * Create a course
 * description: Builds a new course
 * @param {Object} userBody
 * @returns {Promise<course>}
 */

const createCourse = async (event) => {
  const courses = await Course.scan().where('name').eq(event.name).exec();
    if (Array.isArray(courses) && courses.length > 0) {
      throw new Error('already exists');
    }
    return Course.create({
      event
    });
  };

  export default createCourse;
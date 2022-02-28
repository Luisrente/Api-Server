import APIResponses from '../../common';
import CourseServive from '../../services/course';

export const createCourse = async (event) => {
    try {
      const request = JSON.parse(event.body);
      console.log(request);
      const newCourse = await CourseServive.createCourse(request);
      return  APIResponses._200({
        data: newCourse,
      }
      );
    } catch (error) {
      return APIResponses._400({
        error: error.message,
      });
    }
  };
  
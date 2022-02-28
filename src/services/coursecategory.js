import CourseCategory from '../models/CourseCategory';


const createCourseCategory = async (categoriaBody) => {
    const categoria = await User.scan().where('topic').eq(userBody.email).exec();
    if (Array.isArray(categoria) && categoria.length > 0) {
      throw new Error('Categoria already exists');
    }
    return User.create({
      id: uuid(),
      ...userBody,
    });
  };

export default UserService;

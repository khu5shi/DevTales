
import fs from 'fs';
import imageKit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';

export const addBlog = async (req,res)=>{
try{
    const {title,subTitle,description,category,isPublished} = JSON.parse(req.body.blog);
    const imageFile = req.file;
    
    //check if all the fields are present 
    if(!title || !description || !category || !imageFile){
    return res.json({success:false , message: "All fields are required"})
    }
    const fileBuffer = fs.readFileSync(imageFile.path);
   
    //upload image to imagekit

   const response = await imageKit.upload({
    file: fileBuffer,
    fileName: imageFile.originalname,
    folder : "/blogs"
   })

   // optimise image url

   const optimizedImageUrl = imageKit.url({
    path: response.filePath,
    transformation : [
        {quality: 'auto'},  //auto compresion 
        {format: 'webp'},   //convert to modern format
        {width: '1280'}    //width resizing
    ]
   });

  const image = optimizedImageUrl;
  await Blog.create({title,subTitle,description,category,image,isPublished})
   res.json({success:true , message: "Blog created successfully"})

  } catch(error){
    
    res.json({success:false,message:error.message})                 
}
}

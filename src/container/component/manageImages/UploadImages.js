import React, { useState } from 'react'

export default function UploadImages() {
    const categories = [
        {
            id: 'Good Morning'
        },
        {
            id: 'Good Night'
        },
        {
            id: 'Motivational'
        },
        {
            id: 'Love'
        }
    ]
    const [selectedImages, setSelectedImages] = useState([]);

    const handleFileInputChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            const imageUrls = files.map((file) => URL.createObjectURL(file));
            setSelectedImages((prevImages) => [...prevImages, ...imageUrls]);
        }
    };
    const removeImage = (index) => {
        setSelectedImages((prevImages) => prevImages.filter((image, i) => i !== index));
      };
    return (
            <div className="man-cat">
                <h2 className='login'>UPLOAD IMAGES</h2>
                <form id="fileInput" action="" method="POST" enctype="multipart/form-data"
                    class="froms">
                    <div className="form-group1">
                        <label for="category" className="text1">Select Language:</label>
                        <select id="language" name="lang" class="dropdown uppercase" size="1">
                            <option value="hindi">Hindi</option>
                            <option value="english">English</option>
                            <option value="marathi">Marathi</option>
                            <option value="wallpaper">Wallpaper</option>
                        </select>
                    </div>
                    <div className="form-group1">
                        <label for="category" className="text1">Select Category:</label>
                        <select id="category" name="category" size="1" class="dropdown uppercase">
                            {categories.map((item, index) => (
                                <option value={item.id} class="uppercase">{item.id} </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group1">
                        <label for="language" className="text1"></label>

                        <input type="file" name="images" accept="image/*" multiple onChange={handleFileInputChange} className='dropdown pick-file' />
                    </div>
                    <button className="button" type="submit">Upload</button>

                </form>

                <div id="uploaded-images">
                    {selectedImages.map((imageUrl, index) => (
                        <div key={index} style={{ position: 'relative' }}>
                            <img
                                src={imageUrl}
                                alt={`Image ${index}`}
                                style={{ maxWidth: '100%', maxHeight: '100px', margin: '5px' }}
                            />
                            <div
                                style={{ position: 'absolute', top: 5, right: 5, cursor: 'pointer',fontSize: 20, color: 'white',backgroundColor: 'red',width: 20 }}
                                onClick={() => removeImage(index)}
                            >X</div>
                        </div>
                    ))}
                </div>
            </div>
    )
}
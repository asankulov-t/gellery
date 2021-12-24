import React from 'react';

const ImgCards = ({image, views, downloads, likes, user, tags}) => {
    return (
        <div>
            {image===undefined?null:
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={image} alt="" className={'w-full'}/>
                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl mb-2">
                        Photo By {user}
                    </div>
                    <ul>
                        <li>
                            <strong>
                                Views:
                            </strong>
                            {views}
                        </li>
                        <li>
                            <strong>
                                Downloads:
                            </strong>
                            {downloads}
                        </li>
                        <li>
                            <strong>
                                Likes:
                            </strong>
                            {likes}
                        </li>
                    </ul>
                </div>
                <div className="px-6 pt-4">
                    {tags===undefined?null:tags.split(',').map((tags, index)=>(
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
                    #{tags}
                    </span>
                    ))}
                </div>
            </div>}
        </div>

    );
};

export default ImgCards;
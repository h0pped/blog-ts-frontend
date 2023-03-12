import { Link } from 'react-router-dom';
import Heading from '../Typography/Heading/Heading';

const articles = [
  {
    title:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, sit',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure sunt eveniet amet, voluptatibus unde.',
    photo: 'https://leonardo.osnova.io/52a39539-fed3-53e0-b5c9-a4dee33bc5e0/',
    author: {
      photo: null,
      name: 'John Doe',
    },
    category: 'Tech',
    publishedAt: '2021-10-10',
  },
];

function Feed(): JSX.Element {
  return (
    <div className="mt-5 w-1/2 flex flex-col ">
      <div className=" drop-shadow-md bg-white rounded-md p-3 ">
        {articles.map((article) => (
          <div className="min-h-96">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <Heading className="text-sm mr-5">{article.category}</Heading>
                <Heading className="text-sm mr-5">
                  {article.author.name}
                </Heading>
                <Heading className="text-sm mr-5">
                  {article.publishedAt}
                </Heading>
              </div>
              <div>
                <Link to="#" className="text-blue-800">
                  Подписаться
                </Link>
              </div>
            </div>
            <Heading className="text-xl mt-2 font-medium">
              {article.title}
            </Heading>
            <img
              src={article.photo}
              className="w-full max-h-96 h-96 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;

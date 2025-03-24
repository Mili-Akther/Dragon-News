import React from 'react';
import RightNav from '../Components/layout-component/RightNav';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Components/Header';

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(news);
    return (
      <div>
        <header>
          <Header></Header>
        </header>
        <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
          <section className="col-span-9">
            <h2 className="font-semibold mb-3">Dragon News</h2>
            <div className="flex justify-center items-center  shadow-xl ">
              <div className="card bg-white shadow-lg p-6 rounded-lg max-w-[789px]">
                <figure>
                  <img
                    src={news?.image_url}
                    alt="News Image"
                    className="rounded-lg"
                  />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title text-xl font-bold">
                    {news?.title}
                  </h2>
                  <p className="text-sm text-gray-500">{news?.details}</p>
                  <Link
                    to={`/category/${news?.category_id}`}
                    className="btn btn-error btn-outline mt-4 w-full"
                  >
                    ← All news in this category
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <aside className="col-span-3">
            <RightNav></RightNav>
          </aside>
        </main>
      </div>
    );
};

export default NewsDetails;
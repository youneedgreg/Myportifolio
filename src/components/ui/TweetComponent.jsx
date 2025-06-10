import { getTweet } from "react-tweet/api";
import { Suspense } from "react";
import { TweetSkeleton, EmbeddedTweet, TweetNotFound } from "react-tweet";
import "@/styles/tweet.css";

const TweetContent = async ({ id, components, onError }) => {
    let error;
    const tweet = id
        ? await getTweet(id).catch((err) => {
              if (onError) {
                  error = onError(err);
              } else {
                  console.error(err);
                  error = err;
              }
          })
        : undefined;

    if (!tweet) {
        const NotFound = components?.TweetNotFound || TweetNotFound;
        return <NotFound error={error} data-oid="lh.3o:h" />;
    }

    return (
        <EmbeddedTweet
            tweet={tweet}
            components={components}
            data-oid="dvlc2qt"
        />
    );
};

export const ReactTweet = (props) => (
    <TweetContent {...props} data-oid="479gxju" />
);

export async function TweetComponent({ id }) {
    return (
        <div className="tweet my-6" data-oid="4poz4ah">
            <div className={`flex justify-center`} data-oid="a4hi_42">
                {/* <Suspense fallback={<TweetSkeleton />}> */}
                <ReactTweet id={id} data-oid="a8bhow9" />
                {/* </Suspense> */}
            </div>
        </div>
    );
}

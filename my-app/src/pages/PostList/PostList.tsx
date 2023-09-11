import React from "react";
import TabMenu from "src/components/TabMenu";
import PageTemplate from "src/components/PageTemlate";

const PostList = () => {
  return (
    <PageTemplate title="Blog">
      <div className="posts__container">
        <TabMenu />
      </div>
    </PageTemplate>
  );
};

export default PostList;

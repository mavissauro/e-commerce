import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import CollectionsOverviewContainer from "./../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "./../collection/collection.container";
import { fetchCollectionsStart } from "./../../redux/shop/shop.actions";
import { connect } from "react-redux";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);

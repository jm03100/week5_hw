import React from "react";
import _ from "lodash";
import Spinner from "../elements/Spinner";
import { useCallback } from "react";

const InfinityScroll = (props) => {
  const { children, callNext, is_next, loading } = props;

  const _handleScroll = _.throttle(() => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

    if (scrollHeight - innerHeight - scrollTop < 100) {
      if (loading) {
        return;
      }
      callNext();
    }
  }, 300);

  const handleScroll = useCallback(_handleScroll, [loading]);

  React.useEffect(() => {

    if(loading) {
      return;
    }

    if(is_next) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [is_next, loading])

  return (
    <React.Fragment>
      {children}
      {is_next && <Spinner />}
    </React.Fragment>
  )
};

InfinityScroll.defaultProps = {
  children: null,
  callNext: () => {},
  is_next: false,
  loading: false,
}

export default InfinityScroll;
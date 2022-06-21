import {CoinsContext} from '../../context/CoinsContext';
import {PostsContext} from '../../context/PostsContext';

const Contexts = ({children, postList, coinList}) => (
  <PostsContext.Provider value={postList}>
    <CoinsContext.Provider value={coinList}>
      {children}
    </CoinsContext.Provider>
  </PostsContext.Provider>
);

export default Contexts;
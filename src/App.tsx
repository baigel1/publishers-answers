import {
  GenerativeDirectAnswer,
  SearchBar,
  VerticalResults,
} from "@yext/search-ui-react";

import KnowledgeCard from "./Components/KnowledgeCard";

const App = (): JSX.Element => {
  return (
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-5xl">
        <SearchBar />
        <GenerativeDirectAnswer />
        <VerticalResults CardComponent={KnowledgeCard} />
      </div>
    </div>
  );
};

export default App;

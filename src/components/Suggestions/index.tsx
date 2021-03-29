import React from 'react';

import { Container, Text, TagContainer, Tag } from './style';

interface ISuggestions {
  suggestions?: Array<string>;
  onAddTag?: (text: string) => void;
}

export const Suggestions = ({
  suggestions,
  onAddTag,
}: ISuggestions): React.ReactElement => {
  return (
    <>
      <Text>Sugestões</Text>
      <Container>
        <TagContainer>
          {suggestions &&
            suggestions?.map(suggestion => (
              <Tag
                key={suggestion}
                text={suggestion}
                iconName="plus"
                onIconPress={() => onAddTag && onAddTag(suggestion)}
                iconBackgroundColor="#fff"
                iconColor="#000"
              />
            ))}
        </TagContainer>
      </Container>
    </>
  );
};

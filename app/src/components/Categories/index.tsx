import { FlatList } from "react-native";
import { Text } from "../Text";
import { categories } from "../../mocks/categories";
import { CategoryContainer, Icon } from "./styles";

export function Categories() {
    return (
        <>
            <FlatList
                horizontal
                data={categories}
                keyExtractor={(category) => category._id}
                renderItem={({ item: category }) => (
                    <CategoryContainer key={category._id}>
                        <Icon>
                            <Text>{category.icon}</Text>
                        </Icon>
                        <Text size={14} weight="600">
                            {category.name}
                        </Text>
                    </CategoryContainer>
                )}
            />
        </>
    );
}

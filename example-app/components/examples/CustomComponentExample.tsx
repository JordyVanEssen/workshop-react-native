import React from "react";
import { View } from "react-native";

interface ExampleProps {
    id: number;
    name: string;
}

export default function FuncExample(props: ExampleProps) {
    const { id, name } = props;
    return <View>

    </View>
}

const ConstExample = () => {
    return <View>

    </View>
}
export { ConstExample };

class ClassExample extends React.Component {
    render() {
        return <View>

        </View>
    }
}
export { ClassExample };
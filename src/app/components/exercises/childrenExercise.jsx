import React from "react";
import CollapseWrapper from "../common/collapse";
import ComponentsList from "../examples/children/ComponentsList";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <ComponentsList>
                <Component />
                <Component />
                <Component />
            </ComponentsList>
        </CollapseWrapper>
    );
};

const Component = ({ num }) => {
    return <div>{num}. Компонент списка</div>;
};

Component.propTypes = {
    num: PropTypes.number
};

export default ChildrenExercise;

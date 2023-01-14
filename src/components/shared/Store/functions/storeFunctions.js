
/** Store functions definition **/

export const mapStateToProps = (state) => {
    return {
        yachts_content: state.yachts_content.data,
        current_yacht: state.yachts_content.data,
    };
};

export const mapDispatchToProps = (dispatch) => {

    return {
        handleChangeYacht: (input) => {
            console.log("Current yacht")
            return dispatch({
                type: "CURRENT_YACHT",
                payload: {data: input},
            });
        },
    }
}
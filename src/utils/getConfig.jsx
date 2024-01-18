const getConfig = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem("chatTectoken")}` }
});

export default getConfig;
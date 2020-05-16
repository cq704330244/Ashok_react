export default {
  formateDate(time) {
    if (!time) return '';
    let data = new Date(time);
    let year = data.getFullYear();
    let mon =
      data.getMonth() + 1 < 10
        ? '0' + (data.getMonth() + 1)
        : data.getMonth() + 1;
    let day = data.getDate() < 10 ? '0' + data.getDate() : data.getDate();
    let hours = data.getHours() < 10 ? '0' + data.getHours() : data.getHours();
    let min =
      data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes();
    let sec =
      data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds();
    let Nowtime =
      year + '-' + mon + '-' + day + ':' + hours + ':' + min + ':' + sec;
    return Nowtime;
  },
};

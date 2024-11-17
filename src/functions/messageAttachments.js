/**
 * @param {import("..").Data} d
 */
module.exports = async d => {
    const data = d.util.aoiFunc(d);
    const [split = ', '] = data.inside.splits;
  
    data.result = d.message.attachments.map(x => x?.url).join(split);
    return {
        code: d.util.setCode(data)
    }
}

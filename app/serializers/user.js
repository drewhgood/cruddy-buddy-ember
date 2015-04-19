import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    client: {embeded: 'always'}
  }

  // keyForRelationship: function(key, relationship) {
  //   return key + 'Ids';
  // }


});

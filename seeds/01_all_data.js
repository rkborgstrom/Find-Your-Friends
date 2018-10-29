exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('all_data').del()
    .then(function () {
      // Inserts seed entries
      return knex('all_data').insert([{
        full_name: 'Ryan Borgstrom',
        mountain: 'Breckenridge',
        message: 'Leaving at 7am and can fit 2 others',
        passengers: 2,
        time_leaving: 'around 7am-7:30am',
        date: '11/09/2018',
        time: '5:20',
        phone_number: '815-341-6665'
      }]);
    });
};

const fs = require('fs');
const parse = require('csv-parse');
const yaml = require('write-yaml');

const inputPath = './csv/studio_portfolio.csv';
const headers = ['id','name','description','phase','theme','product_man','product_man_slack','service_man','service_man_slack','team_slack','location'];
const parser = parse({columns: headers, from: 2});
const csv = fs.readFileSync(inputPath, 'utf8');

parser.on('readable', () => {
  while(record = parser.read()){
    createYmlFile(record);
  }
});

parser.on('error', (err) => {
  if (err) throw err;
});

parser.on('finish', () => {
  console.log('All done');
});

parser.write(csv);

parser.end();

const createYmlFile = (record) => {
  yaml('./app/data/projects/' + record.id + '.yml', record, (err) => {
    if (err) throw err;
  });
}


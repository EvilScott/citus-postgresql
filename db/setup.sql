CREATE TABLE results (
    keyword_id INT NOT NULL,
    market_id INT NOT NULL,
    created_date DATE NOT NULL,
    entries JSONB NOT NULL,
    PRIMARY KEY (keyword_id, market_id, created_date)
) PARTITION BY RANGE (created_date);

CREATE INDEX idx_results_keyword_id ON results (keyword_id);
CREATE INDEX idx_results_market_id ON results (market_id);
CREATE INDEX idx_results_created_date ON results (created_date);

CREATE TABLE results_2016 PARTITION OF results
    FOR VALUES FROM ('2016-01-01') TO ('2017-01-01');

CREATE TABLE results_2017 PARTITION OF results
    FOR VALUES FROM ('2017-01-01') TO ('2018-01-01');

CREATE TABLE results_2018 PARTITION OF results
    FOR VALUES FROM ('2018-01-01') TO ('2019-01-01');

CREATE TABLE results_2019 PARTITION OF results
    FOR VALUES FROM ('2019-01-01') TO ('2020-01-01');

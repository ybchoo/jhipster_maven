package com.cyb.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of {@link ShipmentSearchRepository} to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class ShipmentSearchRepositoryMockConfiguration {

    @MockBean
    private ShipmentSearchRepository mockShipmentSearchRepository;
}

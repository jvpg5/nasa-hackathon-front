# NASA PDS-Imaging API Integration

This API route serves as a proxy for the NASA PDS-Imaging Atlas API.

## API Endpoint

```
/api/nasa
```

## Query Parameters

The route supports the following query parameters:

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `image_content` | string | Free text search on image content | `crater`, `olympus mons` |
| `start` | number | Index of first record to return (0-based) | `0`, `12` |
| `rows` | number | Maximum number of records to return | `12`, `50` |
| `target` | string | Target body | `mars`, `europa` |
| `instrument_name` | string | Name of the instrument | `MAHLI`, `NAVCAM` |
| `mission_name` | string | Name of the mission | `MSL`, `VOYAGER` |
| `pds_archive_status` | string | PDS Archive Status | `pds3`, `pds4` |
| `primary_product_type` | string | Primary Product Type | `image` |
| `fq` | string | Filter query (Solr format) | `target:mars` |
| `sort` | string | Sort order for results | `time_min asc` |
| `start_date` | string | Start date filter (ISO format) | `2020-01-01T00:00:00Z` |
| `stop_date` | string | End date filter (ISO format) | `2023-12-31T23:59:59Z` |
| `pt` | string | Latitude,Longitude for spatial search | `10.5,120.3` |
| `d` | number | Distance in kilometers for spatial search | `10`, `100` |

## Spatial Search

To perform a spatial search, provide both `pt` (point as latitude,longitude) and `d` (distance in km) parameters:

```
/api/nasa?pt=10.5,120.3&d=100
```

## Date Range Filter

Filter images by date range using `start_date` and `stop_date`:

```
/api/nasa?start_date=2020-01-01T00:00:00Z&stop_date=2023-12-31T23:59:59Z
```

## Sorting

Sort results using the `sort` parameter:

```
/api/nasa?sort=time_min desc
```

Available sort fields:
- `score` - Relevance score
- `time_min` - Acquisition time
- `time_max` - End of acquisition time
- `target` - Target name
- `instrument_name` - Instrument name
- `mission_name` - Mission name
- `pds_archive_status` - PDS Archive Status
- `primary_product_type` - Primary Product Type

Add `asc` or `desc` to indicate sort direction.

## Response Format

The response follows the Solr JSON response format:

```json
{
  "responseHeader": {
    "zkConnected": true,
    "status": 0,
    "QTime": 16,
    "params": { ... }
  },
  "response": {
    "numFound": 123,
    "start": 0,
    "maxScore": 5.6789,
    "numFoundExact": true,
    "docs": [ ... ]
  }
}
```

## Error Handling

Errors return an appropriate HTTP status code and JSON response:

```json
{
  "error": "Error message",
  "details": {
    "code": "ERROR_CODE",
    "status": 500
  }
}
```

## External Documentation

For more detailed information about the underlying API, visit:
[PDS-Imaging Atlas API Documentation](https://pds-imaging.jpl.nasa.gov/tools/atlas/api/)
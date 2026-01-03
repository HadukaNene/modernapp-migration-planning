# Migration Risk Register

This document lists key risks for the migration from LegacyApp to ModernApp.

| ID | Risk description                          | Likelihood | Impact | Mitigation idea                                      |
|----|-------------------------------------------|-----------|--------|------------------------------------------------------|
| R1 | Data loss during migration                | Medium    | High   | Thorough backups and rehearsal of migration scripts  |
| R2 | Extended downtime during cutover          | Medium    | High   | Use blue-green or canary deployment approaches       |
| R3 | Performance degradation after go-live     | Medium    | Medium | Performance testing before cutover; monitoring setup |
| R4 | Team lacks containerization experience    | High      | Medium | Training and starting with a simple containerized app|
| R5 | Incomplete understanding of LegacyApp     | Medium    | Medium | Extra assessment time and documentation              |

This list will be refined as more information becomes available.

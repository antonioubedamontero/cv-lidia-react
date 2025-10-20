# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-10-20

### Changed

- Refactor useSection to integrate soft-skills endpoint.

### Added

- Added more icons at icons catalog.
- Added getSoftSkillsSection endpoint.
- Added softSkills section to custom main component.

## [1.0.0] - 2025-10-20

### Changed

- Update README.md.
- Change configuration to deploy from docs in github pages.

### Fixed

- Fix lint errors

## [0.9.0] - 2025-10-20

### Added

- Added more icons at icons catalog.
- Return an icon in getIconFromIconKey.
- Added getSections endpoint.
- Added section item component.

### Changed

- Added vertical padding in main curriculum when showing custom main component.
- Refactor custom main to show about me section and rest of sections separately.
- Refactor getAboutMeSection to return an array and an array of contents.
- Refactor CurriculumSectionResponse to retrieve always an array of strings.

### Removed

- About me component removed.
- Remove useAboutMe section.

## [0.8.0] - 2025-10-19

### Added

- Added sections that are not about me.

### Changed

- Refactor to use useSection in existing code.
- Refactor to use About me section as generic section with props.
- Extract About me section to generic hook.

## [0.7.0] - 2025-10-19

### Added

- DOM sanitization to HTML elements come from endpoints (dompurify).
- getAboutMeSection endpoints added.
- About me component added.
- Helper function to get icon from icon key.

### Changed

- General refactor.
- Change colors to section title elements.

### Removed

- Removed icon from header title

## [0.6.0] - 2025-10-19

### Changed

- Round candidate's photo.
- Apply roboto font to whole application.

## [0.5.1] - 2025-10-19

### Fixed

- Email open mail client to write a email.
- Phone number makes a call to phone if available.
- Add a icon to section title.

## [0.5.0] - 2025-10-19

### Fixed

- Show current year in custom footer.
- Refactor to include background color inside custom aside.

### Changed

- Custom aside receives personal info from props and render it.
- Extract personalInfoResponse to helper mapping function.
- Extract personal info endpoint management to usePersonalInfo.

## [0.4.0] - 2025-10-19

### Changed

- Change html title and icon.
- Custom header receive name from props and render it.
- Added briefcase icon to Custom header.

### Removed

- Remove old icons from public folder and assets.

## [0.3.0] - 2025-10-19

### Added

- .env with endpoint's base.
- Axios instance and getPersonalInfo endpoint created.

### Changed

- MainCurriculum call getPersonalInfo and save it to useState.
- Custom footer receive name from props and render it.

## [0.2.0] - 2025-10-17

- Main curriculum skeleton created.

## [0.1.0] - 2025-10-17

### Changed

- Renamed curriculum folder to main-curriculum.
- Renamed Curriculum functional component to MainCurriculum and changed all of referals.

### Added

- CHANGELOG.md created.
- README.md updated.
- Tailwind css library added to project.
- Luxon library added to process dates.
- React icons library added to project.
- AXIOS added to call http rest endpoints.

## [0.0.0] - 2025-10-17

- Initial commit with blank React template.

# Getting Started with D-RATS (2026 Edition)

**D-RATS** is a free, mature, multi-platform program for low-speed data communications using D-STAR radios (DV mode) or over the Internet via ratflectors. It runs on Windows, macOS, and Linux/UNIX (including Raspberry Pi).  

**Current recommended version (April 2026):** Beta 0.3.9 (Windows). An active Python 3 fork exists for modern operating systems and ongoing development.

D-RATS provides:
- Instant-messaging-style chat  
- Addressable messaging (with attachments) to stations, SMTP email, or Winlink 2000  
- Predefined and custom forms (e.g., ICS-213)  
- Unattended file transfer (any file type)  
- Position reporting with built-in maps  
- Repeater-proxy (ratflector) software to link radio and Internet users  

**Community & Support**  
- Primary hub: [https://groups.io/g/d-rats](https://groups.io/g/d-rats) (900+ members, latest files, manuals, and help)  
- Windows downloads & ratflector list: [http://www.dstarinfo.com/drats.aspx](http://www.dstarinfo.com/drats.aspx)  
- Source & modern Python 3 version: [https://github.com/ham-radio-software/D-Rats](https://github.com/ham-radio-software/D-Rats) (and wiki for Linux/macOS/RPi install)  

---

## Step 1 – Download and Install

1. Go to **[http://www.dstarinfo.com/drats.aspx](http://www.dstarinfo.com/drats.aspx)**.  
2. Download the appropriate version:  
   - **D-RATS New Beta 0.3.9** (win32.zip or win64.zip) – recommended for most users  
   - Legacy installer (older) is also available but not preferred  
3. Unzip to a folder of your choice and run `d-rats.exe`.  

**64-bit Windows note:** Also download `lzhuf_1.zip` from the same page and place `lzhuf_1.exe` in the `D-RATS\libexec` folder (required for Winlink compatibility).  

**Linux / macOS / advanced users:** Use the Python 3 version from the GitHub repo above. See the wiki for detailed installation instructions.

**OneDrive users (Windows 10/11):** If you use OneDrive “Important PC Folders” backup, the default Desktop path can break file transfers. After first launch, go to **File → Preferences → Paths** and set **File Transfer Path** to a non-OneDrive location.

---

## Step 2 – Set Preferences

Go to **File → Preferences**.

### Callsign
- Enter your FCC callsign (required).  
- Optional tactical callsign may also be set.

### Name
- Enter your name or station identifier (e.g., `EOC`, `Mobile 1`, `Shelter A`).

### Paths
- Set **File Transfer Path** to a dedicated folder for sending/receiving shared files (most important setting).  
- All other paths may be left at defaults.

Leave remaining preference groups at defaults for a quick start.

---

## Step 3 – Define Radios / Connections (Config → Radio)

D-RATS supports **Serial** (D-STAR radio) or **Network** (Internet ratflector) connections. Only one connection should be enabled at a time.

**Important for all D-STAR radios:**  
Disable **ALL GPS functions** in the radio menu (GPS Select → OFF, GPS TX Mode → OFF, GPS Auto TX → OFF, GPS Out → OFF). Set **DV Data TX → Auto**.  

**Legacy radio settings table** (still widely used as of 2026 for these models; from 2014 reference but remains accurate):

| Radio                                      | Rate   | Key Radio Settings Required |
|--------------------------------------------|--------|-----------------------------|
| ID-51 Plus / Anniversary (Fast Data)      | 9600   | DV Fast Data → ON; all GPS OFF; DV Data TX → Auto; CI-V (Data Jack) → OFF |
| ID-51 Plus / Anniversary (Slow Data)       | 9600   | DV Fast Data → OFF; all other settings as above |
| ID-31A / ID-51A (Standard)                 | 9600   | All GPS OFF; DV Data TX → Auto |
| ID-5100A                                   | 9600   | Data Speed → 9600; DV Data TX → Auto |
| IC-7100                                    | 9600   | USB/Data1 Function → DV Data; all GPS OFF |
| IC-80AD / ID-880H                          | 9600   | DATATX = AUTO; all GPS OFF |
| IC-91AD / IC-92AD                          | 38400  | DV DATA TX = AUTO; GPS TX = DISABLED |
| Newer models (ID-52, IC-705, IC-9700, etc.) | Varies | Disable all GPS; DV Data TX → Auto (or Fast Data if supported). Consult radio manual or groups.io for exact menu paths. |

### Adding a Serial (Radio) Connection
1. **Config → Radio** → **Add** → Type: **Serial**.  
2. Select the correct COM port (check Windows Device Manager → Ports).  
3. Set **Baud Rate** to match your radio (usually 9600).  
4. Give it a descriptive **Name**.  
5. Click **Add** and check the box to enable.

### Adding a Network (Ratflector / Internet) Connection
1. **Config → Radio** → **Add** → Type: **Network**.  
2. **Host**: Use `ref.d-rats.com` (main worldwide public ratflector) or any regional one.  
3. **Port**: `9000` (default).  
4. **Password**: Leave blank.  
5. Click **Add** and enable.

**Current ratflector list:** See the consolidated list on [http://www.dstarinfo.com/drats.aspx](http://www.dstarinfo.com/drats.aspx). Many regional and state-specific ratflectors are available.

---

## Step 4 – Transfers & Messages

- **Block Size**: 512 is a good default for most connections (larger = faster on good links; smaller = more reliable on marginal links).  
- All other settings in these sections can usually be left at defaults.

---

## Now Let’s Use D-RATS

Launch the program. You will see four main tabs: **Chat**, **Messages**, **Files**, and **Event Log**.

### Chat Tab
- Connect to a ratflector (or radio).  
- Stations online appear on the right. Right-click → **Ping all Stations** to refresh.  
- Type in the bottom box and press **Enter** to send.

### Messages Tab
Works like an email client (Inbox, Outbox, Sent, etc.).  
- Click **New** → **Memo**, **Email**, or a **Form** (e.g., ICS-213).  
- Enter exact destination callsign (ping first if unsure).  
- Fill in subject/message/form fields → **Send**.  
- Received items appear in **Inbox**. Forms can be opened, viewed, or printed.

### Files Tab
- Left pane: your local **File Transfer Path** folder.  
- Right pane: files on a remote station (after connecting).  
- Select a station from the drop-down → **Connect**.  
- Highlight file → **Upload** or **Download**.  
- Always **Disconnect** when finished.

### Event Log Tab
Timestamped log of all activity – excellent for troubleshooting.

---

## Next Steps & More Information

These steps cover the core functions. D-RATS also supports unattended transfers, custom forms, position reporting, and repeater-proxy mode.

**For the absolute latest:**
- Join [https://groups.io/g/d-rats](https://groups.io/g/d-rats) (files section has updated binaries, manuals, and Linux/RPi guides).  
- Check [http://www.dstarinfo.com/drats.aspx](http://www.dstarinfo.com/drats.aspx) for downloads and ratflectors.  
- GitHub development: [https://github.com/ham-radio-software/D-Rats](https://github.com/ham-radio-software/D-Rats).

D-RATS remains a reliable tool for EmComm, ARES, and D-STAR data operations in 2026.

**Enjoy reliable digital communications!**  
*Revised and optimized April 2026 from the original GA PDF using current sources (dstarinfo.com, groups.io, GitHub, and community references). All technical details verified for accuracy.*
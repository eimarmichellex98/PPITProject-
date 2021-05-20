//checklist of places to see/visit/do
import React from "react";
import { ListGroup, Table } from 'react-bootstrap';

export class Checklist extends React.Component {

	render() {
		return (
			<div class="w-5/12 mx-auto">
				<h3 className="text-4xl font-semibold pb-4">Check out these amazing spots!</h3>
				<table className="table-auto border border-blue-400">
					<thead className="border bg-blue-200">
						<tr>
							<th className="border border-blue-400">Right click on image and open in a new tab</th>
							<th className="border border-blue-400 w-24">Location</th>
						</tr>
					</thead>

					<tbody className="bg-blue-100">
						<tr>
							<td><a href="https://www.google.com/maps/place/Slieve+League/@54.6400943,-8.6909536,15z/data=!4m13!1m7!3m6!1s0x485f22efa6f2c15b:0x7b8255838d972820!2sSlieve+League!3b1!8m2!3d54.6400952!4d-8.6821988!3m4!1s0x485f22efa6f2c15b:0x7b8255838d972820!8m2!3d54.6400952!4d-8.6821988?hl=en">
								<img src="/ppitimages/slieve-league-cliffs.jpg" height="250"></img>
							</a></td>
							<td><i>Slieve League Cliffs, County Donegal</i></td>
						</tr>
						<tr>
							<td><a href="https://www.google.com/maps/place/Downpatrick+Head/@54.3236103,-9.3526436,15z/data=!4m13!1m7!3m6!1s0x48592410bb90882b:0xfa55272a37037cd6!2sDownpatrick+Head!3b1!8m2!3d54.3236111!4d-9.3438888!3m4!1s0x48592410bb90882b:0xfa55272a37037cd6!8m2!3d54.3236111!4d-9.3438888?hl=en">
								<img src="/ppitimages/downpatrick-head-010.jpg" height="250"></img>
							</a></td>
							<td><i>Downpatrick Head, County Mayo</i></td>
						</tr>
						<tr>
							<td><a href="https://www.google.com/maps/place/Doo+Lough/@53.653206,-9.78157,14z/data=!4m9!1m2!2m1!1sDoolough+Valley,+County+Mayo!3m5!1s0x485a2adda03d7bf1:0x3f92de86dcc70a85!8m2!3d53.6525718!4d-9.7636286!15sChxEb29sb3VnaCBWYWxsZXksIENvdW50eSBNYXlvWi4KD2Rvb2xvdWdoIHZhbGxleSIbZG9vbG91Z2ggdmFsbGV5IGNvdW50eSBtYXlvkgEFd2F0ZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUkJjVGR1Y0dWUkVBRQ?hl=en">
								<img src="/ppitimages/Doolough-Valley-March-2016_tot.jpg" height="250"></img>
							</a></td>
							<td><i>Doolough Valley, County Mayo</i></td>
						</tr>
						<tr>
							<td><a href="https://www.google.com/maps/place/Croagh+Patrick/@53.7599109,-9.6685461,15z/data=!4m13!1m7!3m6!1s0x48597e9f44519b6f:0xd5945527f27d7c32!2sCroagh+Patrick!3b1!8m2!3d53.7599117!4d-9.6597913!3m4!1s0x48597e9f44519b6f:0xd5945527f27d7c32!8m2!3d53.7599117!4d-9.6597913?hl=en">
								<img src="/ppitimages/croagh_patrick_mayo_edit.jpg" height="250"></img>
							</a></td>
							<td><i>Croagh Patrick, County Mayo</i></td>
						</tr>
						<tr>
							<td><a href="https://www.google.com/maps/place/Cliffs+of+Moher/@52.9715359,-9.4396372,15z/data=!4m13!1m7!3m6!1s0x485b01af0bb881f3:0x283a469048b8c0e6!2sCliffs+of+Moher!3b1!8m2!3d52.9715368!4d-9.4308824!3m4!1s0x485b01af0bb881f3:0x283a469048b8c0e6!8m2!3d52.9715368!4d-9.4308824?hl=en">
								<img src="/ppitimages/20110519_Ireland_0103.jpg" height="250"></img>
							</a></td>
							<td><i>Cliffs of Moher, County Clare</i></td>
						</tr>
						<tr>
							<td><a href="https://www.google.com/maps/place/Faha,+Rossbeigh,+Co.+Kerry/@52.0521491,-9.9874148,15z/data=!4m13!1m7!3m6!1s0x48455bd8e22ae52b:0x87cfd0c4472ef673!2sFaha,+Rossbeigh,+Co.+Kerry!3b1!8m2!3d52.05215!4d-9.97866!3m4!1s0x48455bd8e22ae52b:0x87cfd0c4472ef673!8m2!3d52.05215!4d-9.97866?hl=en">
								<img src="/ppitimages/rossbeighBeach.jpg" height="250"></img>
							</a></td>
							<td><i>Rossbeigh, County Kerry</i></td>
						</tr>
						<tr>
							<td><a href="https://www.google.com/maps/place/Dingle+Slea+Head+Tours/@52.1374324,-10.273429,17z/data=!4m12!1m6!3m5!1s0x484ffbc876276c77:0x293c0e33bae2852a!2sDingle+Slea+Head+Tours!8m2!3d52.1374324!4d-10.2712403!3m4!1s0x484ffbc876276c77:0x293c0e33bae2852a!8m2!3d52.1374324!4d-10.2712403?hl=en">
								<img src="/ppitimages/sleahead.jpg" height="250"></img>
							</a></td>
							<td><i>Slea Head, County Kerry</i></td>
						</tr>
						<tr>
							<td><a href="https://www.google.com/maps/place/Skellig+Michael+Boat+Trips/@51.8857805,-10.3830383,14z/data=!4m9!1m2!2m1!1sSkellig+Michael,+County+Kerry!3m5!1s0x0:0xe57b195e58cd25f1!8m2!3d51.8857805!4d-10.3655288!15sCh1Ta2VsbGlnIE1pY2hhZWwsIENvdW50eSBLZXJyeZIBDXRvdXJfb3BlcmF0b3I?hl=en">
								<img src="/ppitimages/SkelligStarWars.jpg" height="250"></img>
							</a></td>
							<td><i>Skellig Michael, County Kerry</i></td>
						</tr>
						<tr>
							<td><a href="https://www.google.com/maps/place/Beara+Peninsula/@51.7299544,-10.0852054,10z/data=!4m13!1m7!3m6!1s0x48457b885df9b2f1:0xe4a507b71d1a364c!2sBeara+Peninsula!3b1!8m2!3d51.7481667!4d-9.7019227!3m4!1s0x48457b885df9b2f1:0xe4a507b71d1a364c!8m2!3d51.7481667!4d-9.7019227?hl=en">
								<img src="/ppitimages/Peninsula.jpg" height="250"></img>
							</a></td>
							<td><i>The Beara Peninsula, County Cork & Kerry</i></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}